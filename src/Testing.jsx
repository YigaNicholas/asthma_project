import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Testing({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleclick(id) {
    console.log(id);
    setRating(id);
  }
  function mouseenter(id) {
    console.log(id);
    setHover(id);
  }

  function mouseleave(id) {
    console.log(id);
    setHover(0);
  }

  return (
    <div className="flex gap-2 p-4 justify-center mt-6">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating)
                ? "text-yellow-200 cursor-pointer"
                : "text-gray-300 cursor-pointer"
            }
            onClick={() => handleclick(index)}
            onMouseMove={() => mouseenter(index)}
            onMouseLeave={() => mouseleave(index)}
            size={50}
          />
        );
      })}
    </div>
  );
}
