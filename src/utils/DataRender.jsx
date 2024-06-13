export const generateDataOtions  = (dataArray) =>{
    return dataArray.map((data,index)=>{
        return(
            <option key={index} value={data}>
            {data}</option>
        )
    })

}
 export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octomber",
    "November",
    "December",
];
export const years = [2024,2025]