'use client'
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {

    const venueItem = useAppSelector(state => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();

  return (
    <>
        {
            venueItem.length > 0 ?
            venueItem.map((item) => (
                <div
                  className="bg-orange-200 rounded px-5 mx-5 py-2 my-2"
                  key={item.venue + item.bookDate}
                >
                  <div className="text-xl">{item.nameLastname}</div>
                  <div className="text-xl">{item.tel}</div>
                  <div className="text-xl">{item.venue}</div>
                  <div className="text-xl">{item.bookDate}</div>
                  <div
                    className="block rounded-md bg-[#fa616b] px-3 py-2 text-white shadow-sm hover:bg-[#a23c48] w-full mt-3"
                    onClick={() =>
                      dispatch(removeBooking(item))
                    }
                  >
                    Remove from Cart
                  </div>
                </div>
            ))
            : 
            <div className="text-center font-bold text-3xl mt-5">No Venue Booking</div>
        }
    </>
  )
}
