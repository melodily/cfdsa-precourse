import Image from "next/image";

export default function Home() {
    const nuggetsOfWisdom = [
        "Logic will get you from A to B. Imagination will take you everywhere.",
        "There are 10 kinds of people. Those who know binary and those who don't.",
        "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
        "It's not that I'm so smart, it's just that I stay with problems longer.",
        "It is pitch dark. You are likely to be eaten by a grue.",
    ]

    function randomInt(min: number, max: number) { // max is inclusive
        return Math.floor(Math.random() * (max - min) + min);
    }

    const nuggetOfWisdom = nuggetsOfWisdom[randomInt(0, nuggetsOfWisdom.length)];

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-md">
                <Image
                    className="dark"
                    src="/manatee.png"
                    alt="Manatee"
                    width={400}
                    height={400}
                    priority
                />
                <div>
                    <h3 className="text-2xl font-bold">The Hue Manatee greets you and whispers:</h3>
                    <p>{nuggetOfWisdom}</p>
                </div>

                <div className="row-start-3 flex flex-wrap items-center justify-center">
                    Repository:&nbsp;<a
                    href="https://github.com/melodily/cfdsa-precourse.git"
                    className="underline underline-offset-4"
                >
                    https://github.com/melodily/cfdsa-precourse.git</a>
                </div>

            </main>
        </div>
    );
}
