
const formatCurrency = (value) => {
    if(value === undefined) {
        value = 0;
    }

    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(value);
}

const formatDate = (date) => {
    let dateToFormat;

    if(date == typeof Date) {
        dateToFormat = date;
    }
    else {
        dateToFormat = new Date(date);
    }

    return new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(dateToFormat);
}

const formatDatetime = (date) => {
    return new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    }).format(new Date(date));
}

module.exports = {
    formatCurrency,
    formatDate,
    formatDatetime
}