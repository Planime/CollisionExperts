export type IconName = 'instagram' | 'facebook' | 'tiktok'

export type SocialBtnProps = {
  icon: IconName
  theme?: 'light' | 'dark'
  className?: string
  href?: string
}