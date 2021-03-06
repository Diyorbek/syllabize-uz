// Special symbols of bigrams
export const APOSTROPHE = '\u02bc';
export const TURNED_COMMA = '\u2018';

export const CYRILLIC_HARD_SIGN = 'ъ';
export const CYRILLIC_SOFT_SIGN = 'ь';

// Replacement characters for bigrams
export const C_CEDILLA_SMALL = 'ç';
export const S_CEDILLA_SMALL = 'ş';
export const G_BREVE_SMALL = 'ğ';
export const O_TILDE_SMALL = 'õ';
export const N_TILDE_SMALL = 'ñ';

export const VOVELS = 'aoueiõ';
export const LATIN_VOVELS = 'aoueiõ';
export const CYRILLIC_VOVELS = 'аеёиоуэюяў';

// Replacement characters for exceptional letter sequences
export const R_CEDILLA_SMALL = 'ŗ';
export const R_ACUTE_SMALL = 'ŕ';
export const L_ACUTE_SMALL = 'ĺ';
export const M_HOOK_SMALL = 'ɱ';

export type CharType = 'latin' | 'cyrillic';
