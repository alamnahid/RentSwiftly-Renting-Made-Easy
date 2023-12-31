import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

import person from "../../../assets/images/team2.webp"
import AvailableHouseDetailsCard from "./AvailableHouseDetailsCard";
import { IoChatbubblesOutline } from "react-icons/io5";
import ChatModal from "../../../Components/Shared/ChatModal/ChatModal";


const AvailableHouseDetails = () => {
    const { id } = useParams()

    const axiosPublic = useAxiosPublic()
    const { data, refetch, isLoading } = useQuery({
        queryKey: ['houses', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allhouse/${id}`)
            return res.data;
        }
    })

    console.log(data)

    return (
        <div className="mx-[2%] lg:mx-[10%] mt-8 md:mt-20 mb-20 relative">
            <h1 className="text-[#141B2D] text-2xl lg:text-[3.2rem] font-semibold merrin">{data?.housename}</h1>


            <div className="flex justify-between gap-8 flex-col lg:flex-row">
                <AvailableHouseDetailsCard data={data} />

                <div className="mt-[2.5rem]">
                    <div className="w-[22rem] flex flex-col justify-center items-center h-[20rem] rounded-md bg-[#F3F3FA]">
                        <h1 className="text-[#091638] text-center merrin text-[1rem] font-semibold">Owner Info</h1>
                        {
                            data?.ownerimage ? <img className="w-[8.6rem] mt-3 h-[8.2rem] rounded-[50%]" src={data.ownerimage} alt="" />
                            :
                            <img className="w-[8.6rem] mt-3 h-[8.2rem] rounded-[50%]" src={person} alt="" />
                        }
                        <h1 className="text-[#091638] mt-3 text-center merrin text-[1.3rem] font-semibold">{data?.ownername}</h1>
                        <p className="sans text-[#141B2D] text-center">{data?.owneremail}</p>
                        <p className="sans text-[#141B2D] text-center">{data?.contactnumber}</p>
                    </div>
                    <Link to={`/housebooking/${id}`}><button className="btn btn-neutral bg-[#1C3988] w-[22rem]">Book This House</button></Link>
                </div>
            </div>

            <div className="w-[10rem] h-[10rem] shadow-2xl shadow-[#1C3988] rounded-[50%] bg-[#1C3988] flex justify-center items-center flex-col absolute top-[70vh] right-0 hover:bg-black cursor-pointer">
               

            <ChatModal/>
            </div>

        </div>
    );
};

export default AvailableHouseDetails;