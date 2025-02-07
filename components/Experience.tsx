import { Button } from "./ui/moving-border";
import Image from "next/image";

const Experience = () => {
  return (
    <div>
        <div className="flex justify-center mt-44">
            <h1 className="text-lg md:text-4xl text-white max-w-4xl">My <span className="text-purple-300">experience</span></h1>
        </div>
        <div className="flex justify-center">
            <div className="max-w-[900px] mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                <Button
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    className="flex-1 border-white/[0.2] border text-white rounded-xl"
                    >
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                        <Image
                        src={"/exp1.svg"}
                        alt={"Icon"}
                        width={75}
                        height={75}
                        />
                        <div className="lg:ms-5">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                            Frontend Developer
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                            I can build visually cool websites with different functions
                        </p>
                        </div>
                    </div>
                </Button>
                <Button
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    className="flex-1 border-white/[0.2] border text-white rounded-xl"
                    >
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                        <Image
                        src={"/exp2.svg"}
                        alt={"Icon"}
                        width={75}
                        height={75}
                        />
                        <div className="lg:ms-5">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                            Backend Developer
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                            I have experience in databases and realtime connections
                        </p>
                        </div>
                    </div>
                </Button>
                <Button
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    className="flex-1 border-white/[0.2] border text-white rounded-xl"
                    >
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                        <Image
                        src={"/exp3.svg"}
                        alt={"Icon"}
                        width={75}
                        height={75}
                        />
                        <div className="lg:ms-5">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                            Problem solving
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                            I have strong logical thinking skills to solve problems
                        </p>
                        </div>
                    </div>
                </Button>
                <Button
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    className="flex-1 border-white/[0.2] border text-white rounded-xl"
                    >
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                        <Image
                        src={"/exp4.svg"}
                        alt={"Icon"}
                        width={75}
                        height={75}
                        />
                        <div className="lg:ms-5">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                            Game Developer
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                            I can create games which are fun and interactive
                        </p>
                        </div>
                    </div>
                </Button>
            </div>
            </div>
        </div>
  );
};

export default Experience;
