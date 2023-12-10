import OurTeamCard from "./OurTeamCard";
import Marquee from "react-fast-marquee";

const OurTeam = () => {
    return (
        <div className="my-32 lg:mx-[10%] grid grid-cols-4 justify-items-center items-center gap-8">
            <Marquee className="col-span-3">
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
            <OurTeamCard />
            </Marquee>
            

            <div className="w-[21.875rem] h-[23.625rem] flex flex-col justify-center items-center">
                <h1 className="text-[#091638] merrin text-[3.2rem] font-semibold">Our Team</h1>
                <p className="text-[#091638] mt-3 text-[1.3rem] w-[22rem] text-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus rutrum donec ultricies cras id ac.</p>
            </div>


        </div>
    );
};

export default OurTeam;