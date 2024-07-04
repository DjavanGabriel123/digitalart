import Link from "next/link";
import { Image } from "@mantine/core";
const arts = [
    {
        "id": 1,
        "artistName": "Artist Name",
        "artName": "Art Name",
        "price": "9.236",
        "imageSrc": "/cardImage.png"
    },
    {
        "id": 2,
        "artistName": "Artist Name",
        "artName": "Art Name",
        "price": "9.236",
        "imageSrc": "/cardImage.png"
    },
    {
        "id": 3,
        "artistName": "Artist Name",
        "artName": "Art Name",
        "price": "9.236",
        "imageSrc": "/cardImage.png"
    },
    {
        "id": 4,
        "artistName": "Artist Name",
        "artName": "Art Name",
        "price": "9.236",
        "imageSrc": "/cardImage.png"
    },
    {
        "id": 5,
        "artistName": "Artist Name",
        "artName": "Art Name",
        "price": "9.236",
        "imageSrc": "/cardImage.png"
    },
    {
        "id": 6,
        "artistName": "Artist Name",
        "artName": "Art Name",
        "price": "9.236",
        "imageSrc": "/cardImage.png"
    },
    {
        "id": 7,
        "artistName": "Artist Name",
        "artName": "Art Name",
        "price": "9.236",
        "imageSrc": "/cardImage.png"
    },
    {
        "id": 8,
        "artistName": "Artist Name",
        "artName": "Art Name",
        "price": "9.236",
        "imageSrc": "/cardImage.png"
    },
    {
        "id": 9,
        "artistName": "Artist Name",
        "artName": "Art Name",
        "price": "9.236",
        "imageSrc": "/cardImage.png"
    },

]

interface CardArtProps {
    art: {
        id: number;
        imageSrc: string;
        artistName: string;
        price: string;
    };
}

function CardArt({ art }: CardArtProps) {
    return (
        <div className="flex rounded-lg py-1 px-3 gap-5 ">
            <div className="flex items-center justify-center  text-white font-mono font-bold text-xl rounded-full">
                {art.id}
            </div>
            <div className="relative card-back rounded-lg p-4 shadow-lg">
                <Image
                    src={art.imageSrc}
                    alt="art"
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <p className="text-white font-mono font-bold text-xl">
                    {art.artistName}
                </p>
                <div className="flex items-center justify-between ">
                    <p className="text-gray-400 font-mono font-medium text-xs">
                        vol <span className="text-purple-400">{art.price}</span> SOL
                    </p>

                </div>
            </div>
        </div>
    );
}

export default function CardPrincipal() {
    return (
        <div className="container mx-auto mt-8 px-4">
            <div className="flex items-center justify-between mb-4">
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hover:*:bg-gray-500 cursor-pointer">
                {arts.map(art => (
                    <Link key={art.id} href={`/collection/${art.id}`} passHref className="rounded-full">
                        <CardArt art={
                            {
                                id: art.id,
                                imageSrc: art.imageSrc,
                                artistName: art.artistName,
                                price: art.price,
                            }
                        } />
                    </Link>
                ))}
            </div>
        </div>
    );
}