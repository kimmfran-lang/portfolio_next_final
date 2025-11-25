export default function Projects({ projects }) {
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`;
    };

    return (
            </div >
        </section >
    )
}
