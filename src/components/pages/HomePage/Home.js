import { HeroSection } from "../../HeroSection"
import { Pricing } from "../../Pricing"
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "../Data"

export const Home = () => {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <Pricing />
            <HeroSection {...homeObjFour} />
            <HeroSection {...homeObjThree} />
        </>
    )
}