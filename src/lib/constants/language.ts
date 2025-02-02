export enum GET_LANGUAGE_FROM_CODE {
	// 'ab' = 'Abkhaz',
	// 'aa' = 'Afar',
	// 'af' = 'Afrikaans',
	// 'ak' = 'Akan',
	// 'sq' = 'Albanian',
	// 'am' = 'Amharic',
	// 'ar' = 'Arabic',
	// 'an' = 'Aragonese',
	// 'hy' = 'Armenian',
	// 'as' = 'Assamese',
	// 'av' = 'Avaric',
	// 'ae' = 'Avestan',
	// 'ay' = 'Aymara',
	// 'az' = 'Azerbaijani',
	// 'bm' = 'Bambara',
	// 'ba' = 'Bashkir',
	// 'eu' = 'Basque',
	// 'be' = 'Belarusian',
	// 'bn' = 'Bengali',
	// 'bh' = 'Bihari',
	// 'bi' = 'Bislama',
	// 'bs' = 'Bosnian',
	// 'br' = 'Breton',
	// 'bg' = 'Bulgarian',
	// 'my' = 'Burmese',
	// 'ca' = 'Catalan; Valencian',
	// 'ch' = 'Chamorro',
	// 'ce' = 'Chechen',
	// 'ny' = 'Chichewa; Chewa; Nyanja',
	// 'zh' = 'Chinese',
	// 'cv' = 'Chuvash',
	// 'kw' = 'Cornish',
	// 'co' = 'Corsican',
	// 'cr' = 'Cree',
	// 'hr' = 'Croatian',
	// 'cs' = 'Czech',
	// 'da' = 'Danish',
	// 'dv' = 'Divehi; Dhivehi; Maldivian;',
	// 'nl' = 'Dutch',
	'en' = 'English',
	// 'eo' = 'Esperanto',
	// 'et' = 'Estonian',
	// 'ee' = 'Ewe',
	// 'fo' = 'Faroese',
	// 'fj' = 'Fijian',
	// 'fi' = 'Finnish',
	// 'fr' = 'French',
	// 'ff' = 'Fula; Fulah; Pulaar; Pular',
	// 'gl' = 'Galician',
	// 'ka' = 'Georgian',
	// 'de' = 'German',
	// 'el' = 'Greek, Modern',
	// 'gn' = 'Guaraní',
	// 'gu' = 'Gujarati',
	// 'ht' = 'Haitian; Haitian Creole',
	// 'ha' = 'Hausa',
	// 'he' = 'Hebrew (modern)',
	// 'hz' = 'Herero',
	// 'hi' = 'Hindi',
	// 'ho' = 'Hiri Motu',
	// 'hu' = 'Hungarian',
	// 'ia' = 'Interlingua',
	// 'id' = 'Indonesian',
	// 'ie' = 'Interlingue',
	// 'ga' = 'Irish',
	// 'ig' = 'Igbo',
	// 'ik' = 'Inupiaq',
	// 'io' = 'Ido',
	// 'is' = 'Icelandic',
	// 'it' = 'Italian',
	// 'iu' = 'Inuktitut',
	// 'ja' = 'Japanese',
	// 'jv' = 'Javanese',
	// 'kl' = 'Kalaallisut, Greenlandic',
	// 'kn' = 'Kannada',
	// 'kr' = 'Kanuri',
	// 'ks' = 'Kashmiri',
	// 'kk' = 'Kazakh',
	// 'km' = 'Khmer',
	// 'ki' = 'Kikuyu, Gikuyu',
	// 'rw' = 'Kinyarwanda',
	// 'ky' = 'Kirghiz, Kyrgyz',
	// 'kv' = 'Komi',
	// 'kg' = 'Kongo',
	// 'ko' = 'Korean',
	// 'ku' = 'Kurdish',
	// 'kj' = 'Kwanyama, Kuanyama',
	// 'la' = 'Latin',
	// 'lb' = 'Luxembourgish, Letzeburgesch',
	// 'lg' = 'Luganda',
	// 'li' = 'Limburgish, Limburgan, Limburger',
	// 'ln' = 'Lingala',
	// 'lo' = 'Lao',
	// 'lt' = 'Lithuanian',
	// 'lu' = 'Luba-Katanga',
	// 'lv' = 'Latvian',
	// 'gv' = 'Manx',
	// 'mk' = 'Macedonian',
	// 'mg' = 'Malagasy',
	// 'ms' = 'Malay',
	// 'ml' = 'Malayalam',
	// 'mt' = 'Maltese',
	// 'mi' = 'Māori',
	// 'mr' = 'Marathi (Marāṭhī)',
	// 'mh' = 'Marshallese',
	// 'mn' = 'Mongolian',
	// 'na' = 'Nauru',
	// 'nv' = 'Navajo, Navaho',
	// 'nb' = 'Norwegian Bokmål',
	// 'nd' = 'North Ndebele',
	// 'ne' = 'Nepali',
	// 'ng' = 'Ndonga',
	// 'nn' = 'Norwegian Nynorsk',
	// 'no' = 'Norwegian',
	// 'ii' = 'Nuosu',
	// 'nr' = 'South Ndebele',
	// 'oc' = 'Occitan',
	// 'oj' = 'Ojibwe, Ojibwa',
	// 'cu' = 'Old Bulgarian',
	// 'om' = 'Oromo',
	// 'or' = 'Oriya',
	// 'os' = 'Ossetian, Ossetic',
	// 'pa' = 'Panjabi, Punjabi',
	// 'pi' = 'Pāli',
	// 'fa' = 'Persian',
	// 'pl' = 'Polish',
	// 'ps' = 'Pashto, Pushto',
	// 'pt' = 'Portuguese',
	// 'qu' = 'Quechua',
	// 'rm' = 'Romansh',
	// 'rn' = 'Kirundi',
	// 'ro' = 'Romanian, Moldavian, Moldovan',
	// 'ru' = 'Russian',
	// 'sa' = 'Sanskrit (Saṁskṛta)',
	// 'sc' = 'Sardinian',
	// 'sd' = 'Sindhi',
	// 'se' = 'Northern Sami',
	// 'sm' = 'Samoan',
	// 'sg' = 'Sango',
	// 'sr' = 'Serbian',
	// 'gd' = 'Scottish Gaelic; Gaelic',
	// 'sn' = 'Shona',
	// 'si' = 'Sinhala, Sinhalese',
	// 'sk' = 'Slovak',
	// 'sl' = 'Slovene',
	// 'so' = 'Somali',
	// 'st' = 'Southern Sotho',
	// 'es' = 'Spanish',
	// 'su' = 'Sundanese',
	// 'sw' = 'Swahili',
	// 'ss' = 'Swati',
	// 'sv' = 'Swedish',
	// 'ta' = 'Tamil',
	// 'te' = 'Telugu',
	// 'tg' = 'Tajik',
	// 'th' = 'Thai',
	// 'ti' = 'Tigrinya',
	// 'bo' = 'Tibetan Standard, Tibetan, Central',
	// 'tk' = 'Turkmen',
	// 'tl' = 'Tagalog',
	// 'tn' = 'Tswana',
	// 'to' = 'Tonga (Tonga Islands)',
	'tr' = 'Turkish',
	// 'ts' = 'Tsonga',
	// 'tt' = 'Tatar',
	// 'tw' = 'Twi',
	// 'ty' = 'Tahitian',
	// 'ug' = 'Uighur, Uyghur',
	// 'uk' = 'Ukrainian',
	// 'ur' = 'Urdu',
	// 'uz' = 'Uzbek',
	// 've' = 'Venda',
	// 'vi' = 'Vietnamese',
	// 'vo' = 'Volapük',
	// 'wa' = 'Walloon',
	// 'cy' = 'Welsh',
	// 'wo' = 'Wolof',
	// 'fy' = 'Western Frisian',
	// 'xh' = 'Xhosa',
	// 'yi' = 'Yiddish',
	// 'yo' = 'Yoruba',
	// 'za' = 'Zhuang, Chuang',
}
export enum GET_LANGUAGE_CODE {
	Abkhazian = 'ab',
	Afar = 'aa',
	Afrikaans = 'af',
	Akan = 'ak',
	Albanian = 'sq',
	Amharic = 'am',
	Arabic = 'ar',
	Aragonese = 'an',
	Armenian = 'hy',
	Assamese = 'as',
	Avaric = 'av',
	Avestan = 'ae',
	Aymara = 'ay',
	Azerbaijani = 'az',
	Bambara = 'bm',
	Bashkir = 'ba',
	Basque = 'eu',
	Belarusian = 'be',
	Bengali = 'bn',
	Bihari = 'bh',
	Bislama = 'bi',
	Bosnian = 'bs',
	Breton = 'br',
	Bulgarian = 'bg',
	Burmese = 'my',
	Catalan = 'ca',
	CentralKhmer = 'km',
	Chamorro = 'ch',
	Chechen = 'ce',
	Chewa = 'ny',
	Chinese = 'zh',
	OldBulgarian = 'cu',
	Chuvash = 'cv',
	Cornish = 'kw',
	Corsican = 'co',
	Cree = 'cr',
	Croatian = 'hr',
	Czech = 'cs',
	Danish = 'da',
	Maldivian = 'dv',
	Dutch = 'nl',
	Dzongkha = 'dz',
	English = 'en',
	Esperanto = 'eo',
	Estonian = 'et',
	Ewe = 'ee',
	Faroese = 'fo',
	Fijian = 'fj',
	Finnish = 'fi',
	French = 'fr',
	Fulah = 'ff',
	Gaelic = 'gd',
	Galician = 'gl',
	Ganda = 'lg',
	Georgian = 'ka',
	German = 'de',
	Gikuyu = 'ki',
	Greek = 'el',
	Greenlandic = 'kl',
	Guarani = 'gn',
	Gujarati = 'gu',
	Haitian = 'ht',
	Hausa = 'ha',
	Hebrew = 'he',
	Herero = 'hz',
	Hindi = 'hi',
	HiriMotu = 'ho',
	Hungarian = 'hu',
	Icelandic = 'is',
	Ido = 'io',
	Igbo = 'ig',
	Indonesian = 'id',
	Interlingua = 'ia',
	Interlingue = 'ie',
	Inuktitut = 'iu',
	Inupiaq = 'ik',
	Irish = 'ga',
	Italian = 'it',
	Japanese = 'ja',
	Javanese = 'jv',
	Kannada = 'kn',
	Kanuri = 'kr',
	Kashmiri = 'ks',
	Kazakh = 'kk',
	Kinyarwanda = 'rw',
	Komi = 'kv',
	Kongo = 'kg',
	Korean = 'ko',
	Kwanyama = 'kj',
	Kurdish = 'ku',
	Kyrgyz = 'ky',
	Lao = 'lo',
	Latin = 'la',
	Latvian = 'lv',
	Luxembourgish = 'lb',
	Limburgish = 'li',
	Lingala = 'ln',
	Lithuanian = 'lt',
	LubaKatanga = 'lu',
	Macedonian = 'mk',
	Malagasy = 'mg',
	Malay = 'ms',
	Malayalam = 'ml',
	Maltese = 'mt',
	Manx = 'gv',
	Maori = 'mi',
	Marathi = 'mr',
	Marshallese = 'mh',
	Romanian = 'ro',
	Mongolian = 'mn',
	Nauru = 'na',
	Navajo = 'nv',
	NorthernNdebele = 'nd',
	Ndonga = 'ng',
	Nepali = 'ne',
	NorthernSami = 'se',
	Norwegian = 'no',
	NorwegianB = 'nb',
	NorwegianN = 'nn',
	Nuosu = 'ii',
	Occitan = 'oc',
	Ojibwa = 'oj',
	Oriya = 'or',
	Oromo = 'om',
	Ossetian = 'os',
	Pali = 'pi',
	Panjabi = 'pa',
	Pashto = 'ps',
	Persian = 'fa',
	Polish = 'pl',
	Portuguese = 'pt',
	Quechua = 'qu',
	Romansh = 'rm',
	Rundi = 'rn',
	Russian = 'ru',
	Samoan = 'sm',
	Sango = 'sg',
	Sanskrit = 'sa',
	Sardinian = 'sc',
	Serbian = 'sr',
	Shona = 'sn',
	Sindhi = 'sd',
	Sinhala = 'si',
	Slovak = 'sk',
	Slovenian = 'sl',
	Somali = 'so',
	Sotho = 'st',
	SouthNdebele = 'nr',
	Spanish = 'es',
	Sundanese = 'su',
	Swahili = 'sw',
	Swati = 'ss',
	Swedish = 'sv',
	Tagalog = 'tl',
	Tahitian = 'ty',
	Tajik = 'tg',
	Tamil = 'ta',
	Tatar = 'tt',
	Telugu = 'te',
	Thai = 'th',
	Tibetan = 'bo',
	Tigrinya = 'ti',
	Tonga = 'to',
	Tsonga = 'ts',
	Tswana = 'tn',
	Turkish = 'tr',
	Turkmen = 'tk',
	Twi = 'tw',
	Uyghur = 'ug',
	Ukrainian = 'uk',
	Urdu = 'ur',
	Uzbek = 'uz',
	Venda = 've',
	Vietnamese = 'vi',
	Volap = 'vo',
	Walloon = 'wa',
	Welsh = 'cy',
	WesternFrisian = 'fy',
	Wolof = 'wo',
	Xhosa = 'xh',
	Yiddish = 'yi',
	Yoruba = 'yo',
	Zhuang = 'za',
	Zulu = 'zu',
}
