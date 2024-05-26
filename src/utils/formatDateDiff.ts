export default function formatDateDiff(date: Date) {
    const diffMs = Date.now() - new Date(date).getTime();
    const diffDay = Math.floor(diffMs / (60 * 60 * 24 * 1000));
  
    return diffDay;
  }