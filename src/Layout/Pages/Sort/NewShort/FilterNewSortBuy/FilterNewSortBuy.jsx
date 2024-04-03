import React, { useContext, useEffect, useRef, useState } from "react";
import { FiChevronDown, FiSliders } from "react-icons/fi";
import BuyFilter from "../../BuyFilter/BuyFilter";
import { FilterDataContext } from "../../../../../Providers/FilterDataProvider";

const FilterNewSortBuy = () => {
  const { byFilter } = useContext(FilterDataContext);

  const [closeFilterBuy, setCloseFilterBuy] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (byFilter || closeFilterBuy) {
      closeButtonRef?.current.click();
      // setByFilter(false);
    }
  }, [byFilter, closeFilterBuy]);

  return (
    <div>
      {/* Modal start */}
      <div>
        <dialog id="filterModal_2" className="modal mainDialog  ">
          <div className="modal-box w-full md:w-5/12 h-full max-w-full max-h-[80%] md:max-h-full absolute bottom-0  bg-[#F3F4F6] p-0 overfollowParent ">
            <form method="dialog" className="sticky top-0 left-0 w-full z-10">
              <div className="FilterUp flex justify-between items-center p-2  ">
                <h1 className="ml-2 ">Filters</h1>
                <button className="" ref={closeButtonRef}>
                  ✕
                </button>
              </div>
            </form>
            <div>
              <BuyFilter
                closeFilterBuy={closeFilterBuy}
                setCloseFilterBuy={setCloseFilterBuy}
              ></BuyFilter>
            </div>
          </div>
        </dialog>
      </div>
      {/* Modal end */}

      <button
        onClick={() => document.getElementById("filterModal_2").showModal()}
        className="btn bg-white border-0 shadow-md text-black hover:bg-[#7B53C1] hover:text-white flex items-center justify-center"
      >
        <FiSliders />
        Filter
        <FiChevronDown />
      </button>
    </div>
  );
};

export default FilterNewSortBuy;
