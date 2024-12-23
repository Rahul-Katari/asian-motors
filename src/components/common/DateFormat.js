const DateFormat = ({ isoDate }) => {

    // Convert to Date object
    const date = new Date(isoDate);

    // Options for formatting
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    // Format the date
    const formattedDate = date.toLocaleDateString('en-US', options);

    console.log(formattedDate); // Outputs: "December 21, 2024"

    return (
        <span>{formattedDate}</span>
    )
}

export default DateFormat;