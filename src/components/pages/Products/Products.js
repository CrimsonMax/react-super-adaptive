import { HeroSection } from "../../HeroSection"
import { homeObjFour, homeObjTwo } from "../Data"

export const Products = () => {
    return (
        <>
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjFour} />
        </>
    )
}