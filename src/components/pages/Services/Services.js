import { HeroSection } from "../../HeroSection"
import { Pricing } from "../../Pricing"
import { homeObjOne } from "../Data"

export const Services = () => {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjOne} />
        </>
    )
}