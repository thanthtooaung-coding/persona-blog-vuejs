import * as LucideIcons from 'lucide-vue-next'

export const getIconComponent = (iconName: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (LucideIcons as any)[iconName] || LucideIcons.HelpCircle
}
