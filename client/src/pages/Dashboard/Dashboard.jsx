import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../Components/sideNav/SideNav";
import axios from "axios";
import { path } from "../../API_PATH";
import Card from "../../Components/Card/Card";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { resetNotif } from "../../features/notification/notifSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../Components/spinner/Spinner";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [studySets, setStudySets] = useState(null);

  const { searchInput } = useSelector((state) => state.search);

  //for sending alerts/messages to user
  const isEditState = useSelector((state) => state.notif.isEdited);
  const isDeleteState = useSelector((state) => state.notif.isDeleted);
  const isCreateState = useSelector((state) => state.notif.isCreated);

  useEffect(() => {
    const fetchAllSets = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      try {
        const { data } = await axios.get(path, config);
        setStudySets(data.allSets);
      } catch (error) {
        console.log(error);
      }
    };

    if (!user) {
      navigate("/");
    } else {
      fetchAllSets();
    }
    fetchAllSets();
  }, [user, navigate]);

  useEffect(() => {
    const sendNotif = () => {
      let message = "";

      if (isEditState) {
        message = "successfully updated";
      } else if (isDeleteState) {
        message = "successfully deleted";
      } else if (isCreateState) {
        message = "successfully created";
      } else {
        message = null;
      }
      message ? toast.success(message) : null;
    };
    sendNotif();
    dispatch(resetNotif());
  }, [isEditState, isDeleteState, isCreateState, resetNotif]);

  const filteredSets =
    studySets &&
    searchInput &&
    studySets.filter((item) =>
      item.setTitle.toLowerCase().includes(searchInput.toLowerCase()),
    );

  return (
    <div className="flex items-start justify-start text-center text-dark-green">
      <div className="mt-24">
        <SideNav />
      </div>

      <div className="mx-20 my-12 flex w-full flex-col items-center justify-center">
        {!studySets && (
          <div className="mt-24">
            <Spinner />
          </div>
        )}

        {studySets && studySets.length > 0 && (
          <>
            <h2 className="mb-12 mt-5">click on a set to start studying!</h2>

            <div className=" flex flex-row flex-wrap items-start justify-center gap-12">
              {!searchInput ? (
                studySets.map((item, index) => (
                  <Card
                    key={index}
                    setTitle={item.setTitle}
                    img={item.img}
                    createdAt={item.createdAt}
                    id={item._id}
                  />
                ))
              ) : filteredSets.length < 1 ? (
                <p>No result</p>
              ) : (
                filteredSets.map((item, index) => (
                  <Card
                    key={index}
                    setTitle={item.setTitle}
                    img={item.img}
                    createdAt={item.createdAt}
                    id={item._id}
                  />
                ))
              )}
            </div>
          </>
        )}

        {studySets && studySets.length < 1 && (
          <div className="mt-24 flex flex-col items-center justify-center">
            <img className="h-14 w-14" src="./feedbackCat.png" />
            <p className="primary-p">oh shucks...you currently have no sets</p>
            <Link to="/createSet">
              <button className="secondary-button">Create one here</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
