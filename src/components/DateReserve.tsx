'use client'
import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"

export default function DateReserve({onDateChange, onLocationChange}: {onDateChange: Function, onLocationChange: Function}) {

    const [date, setDate] = useState<any>(null);
    const [location, setLocation] = useState("Bloom");

    const changeLocationState = (e: any) => {
        setLocation(e.target.value);
        onLocationChange(e.target.value);
    }

    const changeDateState = (e: any) => {
        setDate(e);
        onDateChange(e);
    }

    return (
        <div className="bg-[#ffd2bc] rounded-lg space-x-5 space-y-2 w-fit px-10 py-2 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={date} onChange={(e) => changeDateState(e)} />
            </LocalizationProvider>

            <Select variant="standard" name="venue" id="venue" className="h-[2em] w-[200px]" value={location} onChange={(e)=>changeLocationState(e)}>
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
        </div>
    )
}