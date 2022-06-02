export function formatDate(dateString: string):string {
  try {
    if (!(new Date(dateString) instanceof Date)) {
      return ''
    }
    return new Date(dateString).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch (exception) {
    return ''
  }
}

export function formatDateDiff(date: Date, compareDate: Date): string {
  const diff = (date.getTime() - compareDate.getTime())/1000;

  if (diff > 60 && diff< 3600) {
    return Math.ceil(Math.abs((diff) / 60 )) + ' minute(s)'
  }

  if (diff > 3600) {
    return Math.ceil(Math.abs((diff) / 3600)) + ' heure(s)'
  }

  return Math.ceil(Math.abs(diff)) + ' seconde(s)'
}

export function formatDuration(duration:number): string {
  const date = new Date(duration * 1000)
  return `
    ${date.getUTCHours().toString().padStart(2, '0')}:
    ${date.getUTCMinutes().toString().padStart(2, '0')}:
    ${date.getUTCSeconds().toString().padStart(2, '0')}
  `
}
