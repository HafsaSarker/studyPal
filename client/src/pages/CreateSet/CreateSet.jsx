import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { path } from "../../API_PATH";
import SideNav from "../../Components/sideNav/SideNav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsCreated } from "../../features/notification/notifSlice";

export default function CreateSet() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    setTitle: "",
    setDescr: "",
    img: undefined,
    flashCards: [],
  });

  const cardsArray = [
    {
      cardNum: 1,
      term: "",
      definition: "",
    },
  ];

  const [cards, setCards] = useState(cardsArray);

  const addCardInput = () => {
    setCards((prev) => {
      const lastCardNum = prev[prev.length - 1].cardNum;
      return [
        ...prev,
        {
          term: "",
          definition: "",
          cardNum: lastCardNum + 1,
        },
      ];
    });
  };

  //handles changes in formData ONLY
  const handleFormChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCardChange = (e) => {
    e.preventDefault();

    const { name, value, id } = e.target;

    setCards((prev) => {
      const newCardArr = prev.slice();
      name === "term"
        ? (newCardArr[id].term = value)
        : (newCardArr[id].definition = value);

      return newCardArr;
    });
  };

  //onsubmit
  const createNewSet = async (e) => {
    e.preventDefault();

    //add flashcard arr to form data
    formData.flashCards.push(cards);

    if (formData.img == "") {
      formData.img = undefined;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    try {
      await axios.post(`${path}/createSet`, formData, config);
      dispatch(setIsCreated());
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCard = (e) => {
    if (cards.length === 1) {
      return toast.error("Must provide at least one term");
    }

    const newCardsArr = cards.filter(
      (card) => card.cardNum !== Number(e.currentTarget.id),
    );

    setCards(newCardsArr);

    toast.success(`${e.currentTarget.value} deleted`);
  };

  return (
    <div className="flex w-full items-start justify-start text-sm text-dark-green transition-all duration-700 ease-linear">
      <div className="mt-24">
        <SideNav />
      </div>
      <div className="mx-10 my-24 flex w-full flex-col items-center justify-center">
        <p className="text-xl">create a set</p>

        <form
          className="flex w-[32rem] flex-col items-start justify-start gap-3 p-3 text-black"
          onSubmit={createNewSet}
        >
          <label className="flex w-full flex-row items-center rounded-sm bg-light-green px-2 py-1">
            Study set title:
            <input
              className="border-none bg-transparent px-1 focus:outline-none"
              type="text"
              name="setTitle"
              onChange={handleFormChange}
              required
            />
          </label>
          <label className="flex w-full flex-row items-start rounded-sm bg-light-green px-2 py-1">
            Description:
            <textarea
              className="w-9/12 border-none bg-transparent px-1 focus:outline-none"
              name="setDescr"
              onChange={handleFormChange}
              required
            />
          </label>
          <label className="flex w-full flex-row items-center rounded-sm bg-light-green px-2 py-1">
            Image url:
            <input
              className="w-9/12 border-none bg-transparent px-1 focus:outline-none"
              type="text"
              name="img"
              onChange={handleFormChange}
            />
          </label>
          {cards.map((item, i) => {
            return (
              <div
                className="w-full rounded-sm bg-light-green px-1 py-1"
                key={i}
              >
                <div className="flex items-center justify-between">
                  <p className="mb-1">{i + 1}</p>
                  <button
                    type="button"
                    className="hover:text-hover-light-green border-none bg-transparent text-dark-green"
                    onClick={deleteCard}
                    id={item.cardNum}
                    value={item.term}
                  >
                    <AiFillDelete />
                  </button>
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                  <label className="flex w-full flex-col items-start rounded-sm bg-light-green">
                    Term:
                    <textarea
                      className="h-12 w-full rounded-sm border-none bg-dark-green px-1 py-0.5 text-gray-200 focus:outline-none"
                      type="text"
                      id={i}
                      name="term"
                      onChange={handleCardChange}
                      value={item.term}
                      required
                    />
                  </label>
                  <label className="flex w-full flex-col items-start rounded-sm bg-light-green">
                    Definition:
                    <textarea
                      className="h-12 w-full rounded-sm border-none bg-dark-green px-1 py-0.5 text-gray-200 focus:outline-none"
                      id={i}
                      type="text"
                      name="definition"
                      value={item.definition}
                      onChange={handleCardChange}
                      required
                    />
                  </label>
                </div>
              </div>
            );
          })}

          <div className="flex w-full flex-col items-center justify-center gap-2">
            <button
              type="button"
              onClick={addCardInput}
              className="hover:bg-hover-light-green2 w-full rounded-sm border-none bg-light-green p-2 font-semibold"
            >
              Add a card
            </button>
            <button
              type="submit"
              className="hover:bg-hover-dark-green rounded-sm bg-dark-green px-8 py-2 text-gray-200"
            >
              create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
