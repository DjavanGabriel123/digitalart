import CardPrincipal from "../CardPrincipal";
import Hero from "../ui/Hero";
import { Input } from "../ui/SearchInput";
export default function HomePage() {

    return (
        <div className="">
            <Hero />
            <Input placeholder="Search" />
            <CardPrincipal />
        </div>
    )
}