let selected: string | null = null

export const setSelectedPlan = (name: string) => { selected = name }
export const getSelectedPlan = () => selected
