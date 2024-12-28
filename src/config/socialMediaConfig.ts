interface SocialMediaAccount {
  platform: string
  url: string
  icon: string
}

export const socialMediaAccounts: SocialMediaAccount[] = [
  {
    platform: 'Twitter',
    url: 'https://x.com/VinnnDev',
    icon: 'Twitter',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/thanthtooaung-coding',
    icon: 'Github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/thant-htoo-aung-b47374267',
    icon: 'Linkedin',
  },
]

export const getSocialMediaUrl = (platform: string): string => {
  const account = socialMediaAccounts.find(
    (acc) => acc.platform.toLowerCase() === platform.toLowerCase(),
  )
  return account ? account.url : ''
}
