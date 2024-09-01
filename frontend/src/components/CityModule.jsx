import { CityList } from "./CityList";
import { useRecoilState } from "recoil";
import { SearchCityAtom } from "../store/atoms/SearchCityAtom";

export function CityModule() {
    const [city, setCity] = useRecoilState(SearchCityAtom);

    return (
        <div style={{
            border: "3px solid rgb(36, 31, 31)",    // Corrected RGB format for border color
            borderRadius: "8px",                   // Corrected syntax for border-radius
            padding: "20px",                       // Padding inside the card
            margin: "20px auto",                   // Center the card with auto margins
            boxShadow: "10px 6px 8px rgba(9, 10, 6, 0.1)", // Corrected box-shadow syntax
            maxWidth: "600px",                     // Max width of the card
            backgroundColor: "rgb(242 242 242)"   // Corrected RGB format for background color
        }}>
            <div style={{ paddingLeft: "30px" }}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    style={{
                        width: "100%",             // Full width input
                        padding: "10px",           // Padding inside the input
                        marginBottom: "10px",      // Space below the input
                        borderRadius: "4px",       // Rounded corners for the input
                        border: "1px solid #ddd"   // Light gray border for the input
                    }}
                />
                <CityList city={city} />
            </div>
        </div>
    );
}
