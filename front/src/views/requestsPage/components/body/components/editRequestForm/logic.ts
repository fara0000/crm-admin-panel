export const formatYearDate = (dateString: string | undefined) =>
    dateString
        ?.slice(0, 10)
        .split("-")
        .reverse()
        .join("-");

export const formatCommentDate = (data: string, locale: string) => {
    const date = new Date(data);

    return date.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        hour:'2-digit',
        minute: 'numeric',
    });
}