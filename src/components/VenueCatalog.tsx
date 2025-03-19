import Link from "next/link";
import Card from "./Card";

export default async function VenueCatalog({venuesJson}: {venuesJson: Promise<VenueJson>}) {
    const venuesJsonReady = await venuesJson;

    return (
        <div style={{margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around"}}>
            {
                venuesJsonReady.data.map((venueItem: VenueItem) => {
                    return (
                        <Link href={`/venue/${venueItem.id}`} key={venueItem.id} className="w-1/5">
                            <Card 
                                venueName={venueItem.name}
                                imgSrc={venueItem.picture}
                            />
                        </Link>
                    );
                })
            }
        </div>
    );
}