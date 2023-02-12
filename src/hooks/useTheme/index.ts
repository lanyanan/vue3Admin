import { StorageKeys, ThemeType } from "@/globalConstants";
import { shallowRef } from 'vue';
import { ThemeConfig, type Theme } from '@/theme/index'

const theme = shallowRef<Theme>(ThemeConfig[ThemeType.Light]);
const currentThemeName = shallowRef<ThemeType>(ThemeType.Light);

export const useTheme = () => {
  const localTheme = localStorage.getItem(StorageKeys.Theme);
  theme.value = localTheme ? ThemeConfig[localTheme as ThemeType] : ThemeConfig[ThemeType.Light];

  const changeTheme = (type: ThemeType) => {
    theme.value = ThemeConfig[type];
    currentThemeName.value = type;
    localStorage.setItem(StorageKeys.Theme, type)
  }

  return {
    currentThemeName,
    theme,
    changeTheme,
  };
}