
import { FaUser } from "react-icons/fa";
import { MdInsertInvitation } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Cards({ k, card_data }) {

  const data = card_data;
  console.log(data.id);

  return (
    <Link className="shadow-xl grid grid-cols-1 justify-center p-8 mx-2 my-2" to={`/blogs/${data.id}`}  key={k}>
      <div><img src={data.image} alt="" /></div>
      <div className="font-bold lg:text-md text-[13px] mt-2 cursor-pointer"  >{data.title}</div>
      <div className="text-gray-600 inline-flex items-center py-1 gap-2 md:text-md text-[13px]"><FaUser /> {data.author}</div>
      <div className="text-gray-600 inline-flex items-center py-1 gap-2 md:text-md text-[13px]"><MdInsertInvitation /> {data.published_date}</div>
    </Link>
  )
}
