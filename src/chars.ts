export type Kana = { kana: string; roma: string };
export type KanaRow = {
    name: string;
    type: string;
    items: Kana[];
};

export const hiraSingle: Array<Kana> = [
    { kana: "あ", roma: "a" },
    { kana: "い", roma: "i" },
    { kana: "う", roma: "u" },
    { kana: "え", roma: "e" },
    { kana: "お", roma: "o" },
];

export const hiraK: Array<Kana> = [
    { kana: "か", roma: "ka" },
    { kana: "き", roma: "ki" },
    { kana: "く", roma: "ku" },
    { kana: "け", roma: "ke" },
    { kana: "こ", roma: "ko" },
];

export const hiraS: Array<Kana> = [
    { kana: "さ", roma: "sa" },
    { kana: "し", roma: "shi" },
    { kana: "す", roma: "su" },
    { kana: "せ", roma: "se" },
    { kana: "そ", roma: "so" },
];

export const hiraT: Array<Kana> = [
    { kana: "た", roma: "ta" },
    { kana: "ち", roma: "chi" },
    { kana: "つ", roma: "tsu" },
    { kana: "て", roma: "te" },
    { kana: "と", roma: "to" },
];

export const hiraN: Array<Kana> = [
    { kana: "な", roma: "na" },
    { kana: "に", roma: "ni" },
    { kana: "ぬ", roma: "nu" },
    { kana: "ね", roma: "ne" },
    { kana: "の", roma: "no" },
];

export const hiraH: Array<Kana> = [
    { kana: "は", roma: "ha" },
    { kana: "ひ", roma: "hi" },
    { kana: "ふ", roma: "fu" },
    { kana: "へ", roma: "he" },
    { kana: "ほ", roma: "ho" },
];

export const hiraM: Array<Kana> = [
    { kana: "ま", roma: "ma" },
    { kana: "み", roma: "mi" },
    { kana: "む", roma: "mu" },
    { kana: "め", roma: "me" },
    { kana: "も", roma: "mo" },
];

export const hiraY: Array<Kana> = [
    { kana: "や", roma: "ya" },
    { kana: "", roma: "" },
    { kana: "ゆ", roma: "yu" },
    { kana: "", roma: "" },
    { kana: "よ", roma: "yo" },
];

export const hiraR: Array<Kana> = [
    { kana: "ら", roma: "ra" },
    { kana: "り", roma: "ri" },
    { kana: "る", roma: "ru" },
    { kana: "れ", roma: "re" },
    { kana: "ろ", roma: "ro" },
];

export const hiraWaO: Array<Kana> = [
    { kana: "わ", roma: "wa" },
    { kana: "", roma: "" },
    { kana: "", roma: "" },
    { kana: "", roma: "" },
    { kana: "を", roma: "wo" },
];

export const hiraNSingle: Array<Kana> = [
    { kana: "", roma: "" },
    { kana: "", roma: "" },
    { kana: "", roma: "" },
    { kana: "", roma: "" },
    { kana: "ん", roma: "n" },
];

export const hiraG: Array<Kana> = [
    { kana: "が", roma: "ga" },
    { kana: "ぎ", roma: "gi" },
    { kana: "ぐ", roma: "gu" },
    { kana: "げ", roma: "ge" },
    { kana: "ご", roma: "go" },
];

export const hiraZ: Array<Kana> = [
    { kana: "ざ", roma: "za" },
    { kana: "じ", roma: "ji" },
    { kana: "ず", roma: "zu" },
    { kana: "ぜ", roma: "ze" },
    { kana: "ぞ", roma: "zo" },
];

export const hiraD: Array<Kana> = [
    { kana: "だ", roma: "da" },
    { kana: "ぢ", roma: "di / ji" },
    { kana: "づ", roma: "dzu / zu" },
    { kana: "で", roma: "de" },
    { kana: "ど", roma: "do" },
];

export const hiraB: Array<Kana> = [
    { kana: "ば", roma: "ba" },
    { kana: "び", roma: "bi" },
    { kana: "ぶ", roma: "bu" },
    { kana: "べ", roma: "be" },
    { kana: "ぼ", roma: "bo" },
];

export const hiraP: Array<Kana> = [
    { kana: "ぱ", roma: "pa" },
    { kana: "ぴ", roma: "pi" },
    { kana: "ぷ", roma: "pu" },
    { kana: "ぺ", roma: "pe" },
    { kana: "ぽ", roma: "po" },
];

export const hiraKy: Array<Kana> = [
    { kana: "きゃ", roma: "kya" },
    { kana: "きゅ", roma: "kyu" },
    { kana: "きょ", roma: "kyo" },
];

export const hiraSh: Array<Kana> = [
    { kana: "しゃ", roma: "sha" },
    { kana: "しゅ", roma: "shu" },
    { kana: "しょ", roma: "sho" },
];

export const hiraCh: Array<Kana> = [
    { kana: "ちゃ", roma: "cha" },
    { kana: "ちゅ", roma: "chu" },
    { kana: "ちょ", roma: "cho" },
];

export const hiraNy: Array<Kana> = [
    { kana: "にゃ", roma: "nya" },
    { kana: "にゅ", roma: "nyu" },
    { kana: "にょ", roma: "nyo" },
];

export const hiraHy: Array<Kana> = [
    { kana: "ひゃ", roma: "hya" },
    { kana: "ひゅ", roma: "hyu" },
    { kana: "ひょ", roma: "hyo" },
];

export const hiraMy: Array<Kana> = [
    { kana: "みゃ", roma: "mya" },
    { kana: "みゅ", roma: "myu" },
    { kana: "みょ", roma: "myo" },
];

export const hiraRy: Array<Kana> = [
    { kana: "りゃ", roma: "rya" },
    { kana: "りゅ", roma: "ryu" },
    { kana: "りょ", roma: "ryo" },
];

export const hiraGy: Array<Kana> = [
    { kana: "ぎゃ", roma: "gya" },
    { kana: "ぎゅ", roma: "gyu" },
    { kana: "ぎょ", roma: "gyo" },
];

export const hiraJJ: Array<Kana> = [
    { kana: "じゃ", roma: "ja" },
    { kana: "じゅ", roma: "ju" },
    { kana: "じょ", roma: "jo" },
];

export const hiraJC: Array<Kana> = [
    { kana: "ぢゃ", roma: "dya / ja" },
    { kana: "ぢゅ", roma: "dyu / ju" },
    { kana: "ぢょ", roma: "dyo / jo" },
];

export const hiraBy: Array<Kana> = [
    { kana: "びゃ", roma: "bya" },
    { kana: "びゅ", roma: "byu" },
    { kana: "びょ", roma: "byo" },
];

export const hiraPy: Array<Kana> = [
    { kana: "ぴゃ", roma: "pya" },
    { kana: "ぴゅ", roma: "pyu" },
    { kana: "ぴょ", roma: "pyo" },
];

export const kataSingle: Array<Kana> = [
    { kana: "ア", roma: "a" },
    { kana: "イ", roma: "i" },
    { kana: "ウ", roma: "o" },
    { kana: "エ", roma: "e" },
    { kana: "オ", roma: "o" },
];

export const kataK: Array<Kana> = [
    { kana: "カ", roma: "ka" },
    { kana: "キ", roma: "ki" },
    { kana: "ク", roma: "ku" },
    { kana: "ケ", roma: "ke" },
    { kana: "コ", roma: "ko" },
];

export const kataS: Array<Kana> = [
    { kana: "サ", roma: "sa" },
    { kana: "シ", roma: "shi" },
    { kana: "ス", roma: "su" },
    { kana: "セ", roma: "se" },
    { kana: "ソ", roma: "so" },
];

export const kataT: Array<Kana> = [
    { kana: "タ", roma: "ta" },
    { kana: "チ", roma: "chi" },
    { kana: "ツ", roma: "tsu" },
    { kana: "テ", roma: "te" },
    { kana: "ト", roma: "to" },
];

export const kataN: Array<Kana> = [
    { kana: "ナ", roma: "na" },
    { kana: "ニ", roma: "ni" },
    { kana: "ヌ", roma: "nu" },
    { kana: "ネ", roma: "ne" },
    { kana: "ノ", roma: "no" },
];

export const kataH: Array<Kana> = [
    { kana: "ハ", roma: "ha" },
    { kana: "ヒ", roma: "hi" },
    { kana: "フ", roma: "fu" },
    { kana: "ヘ", roma: "he" },
    { kana: "ノ", roma: "ho" },
];

export const kataM: Array<Kana> = [
    { kana: "マ", roma: "ma" },
    { kana: "ミ", roma: "mi" },
    { kana: "ム", roma: "mu" },
    { kana: "メ", roma: "me" },
    { kana: "モ", roma: "mo" },
];

export const kataY: Array<Kana> = [
    { kana: "ヤ", roma: "ya" },
    { kana: "", roma: "" },
    { kana: "ユ", roma: "yu" },
    { kana: "", roma: "" },
    { kana: "ヨ", roma: "yo" },
];

export const kataR: Array<Kana> = [
    { kana: "ラ", roma: "ra" },
    { kana: "リ", roma: "ri" },
    { kana: "ル", roma: "ru" },
    { kana: "レ", roma: "re" },
    { kana: "ロ", roma: "ro" },
];

export const kataWaO: Array<Kana> = [
    { kana: "ワ", roma: "wa" },
    { kana: "", roma: "" },
    { kana: "", roma: "" },
    { kana: "", roma: "" },
    { kana: "ヲ", roma: "wo" },
];

export const kataNSingle: Array<Kana> = [
    { kana: "", roma: "" },
    { kana: "", roma: "" },
    { kana: "", roma: "" },
    { kana: "", roma: "" },
    { kana: "ン", roma: "n" },
];

export const kataG: Array<Kana> = [
    { kana: "ガ", roma: "ga" },
    { kana: "ギ", roma: "gi" },
    { kana: "グ", roma: "gu" },
    { kana: "ゲ", roma: "ge" },
    { kana: "ゴ", roma: "go" },
];

export const kataZ: Array<Kana> = [
    { kana: "ザ", roma: "za" },
    { kana: "ジ", roma: "ji" },
    { kana: "ズ", roma: "zu" },
    { kana: "ゼ", roma: "ze" },
    { kana: "ゾ", roma: "zo" },
];

export const kataD: Array<Kana> = [
    { kana: "ダ", roma: "da" },
    { kana: "ヂ", roma: "di / ji" },
    { kana: "ヅ", roma: "dzu / zu" },
    { kana: "デ", roma: "de" },
    { kana: "ド", roma: "do" },
];

export const kataB: Array<Kana> = [
    { kana: "バ", roma: "ba" },
    { kana: "ビ", roma: "bi" },
    { kana: "ブ", roma: "bu" },
    { kana: "ベ", roma: "be" },
    { kana: "ボ", roma: "bo" },
];

export const kataP: Array<Kana> = [
    { kana: "パ", roma: "pa" },
    { kana: "ピ", roma: "pi" },
    { kana: "プ", roma: "pu" },
    { kana: "ペ", roma: "pe" },
    { kana: "ポ", roma: "po" },
];

export const kataKy: Array<Kana> = [
    { kana: "キャ", roma: "kya" },
    { kana: "キュ", roma: "kyu" },
    { kana: "キョ", roma: "kyo" },
];

export const kataSh: Array<Kana> = [
    { kana: "シャ", roma: "sha" },
    { kana: "シュ", roma: "shu" },
    { kana: "ショ", roma: "sho" },
];

export const kataCh: Array<Kana> = [
    { kana: "チャ", roma: "cha" },
    { kana: "チュ", roma: "chu" },
    { kana: "チョ", roma: "cho" },
];

export const kataNy: Array<Kana> = [
    { kana: "ニャ", roma: "nya" },
    { kana: "ニュ", roma: "nyu" },
    { kana: "ニョ", roma: "nyo" },
];

export const kataHy: Array<Kana> = [
    { kana: "ヒャ", roma: "hya" },
    { kana: "ヒュ", roma: "hyu" },
    { kana: "ヒョ", roma: "hyo" },
];

export const kataMy: Array<Kana> = [
    { kana: "ミャ", roma: "mya" },
    { kana: "ミュ", roma: "myu" },
    { kana: "ミョ", roma: "myo" },
];

export const kataRy: Array<Kana> = [
    { kana: "リャ", roma: "rya" },
    { kana: "リュ", roma: "ryu" },
    { kana: "リョ", roma: "ryo" },
];

export const kataGy: Array<Kana> = [
    { kana: "ギャ", roma: "gya" },
    { kana: "ギュ", roma: "gyu" },
    { kana: "ギョ", roma: "gyo" },
];

export const kataJJ: Array<Kana> = [
    { kana: "ジャ", roma: "ja" },
    { kana: "ジュ", roma: "ju" },
    { kana: "ジョ", roma: "jo" },
];

export const kataJC: Array<Kana> = [
    { kana: "ヂャ", roma: "dya / ja" },
    { kana: "ヂュ", roma: "dyu / ju" },
    { kana: "ヂョ", roma: "dyo / jo" },
];

export const kataBy: Array<Kana> = [
    { kana: "ビャ", roma: "bya" },
    { kana: "ビュ", roma: "byu" },
    { kana: "ビョ", roma: "byo" },
];

export const kataPy: Array<Kana> = [
    { kana: "ピャ", roma: "pya" },
    { kana: "ピュ", roma: "pyu" },
    { kana: "ピョ", roma: "pyo" },
];

export const hiraArr: Array<KanaRow> = [
    { name: "hiraSingle", items: hiraSingle, type: "hira" },
    { name: "hiraK", items: hiraK, type: "hira" },
    { name: "hiraS", items: hiraS, type: "hira" },
    { name: "hiraT", items: hiraT, type: "hira" },
    { name: "hiraN", items: hiraN, type: "hira" },
    { name: "hiraH", items: hiraH, type: "hira" },
    { name: "hiraM", items: hiraM, type: "hira" },
    { name: "hiraY", items: hiraY, type: "hira" },
    { name: "hiraR", items: hiraR, type: "hira" },
    { name: "hiraWaO", items: hiraWaO, type: "hira" },
    { name: "hiraNSingle", items: hiraNSingle, type: "hira" },
    { name: "hiraG", items: hiraG, type: "hira" },
    { name: "hiraZ", items: hiraZ, type: "hira" },
    { name: "hiraD", items: hiraD, type: "hira" },
    { name: "hiraB", items: hiraB, type: "hira" },
    { name: "hiraP", items: hiraP, type: "hira" },
];

export const hiraCombArr: Array<KanaRow> = [
    { name: "hiraKy", items: hiraKy, type: "hira" },
    { name: "hiraSh", items: hiraSh, type: "hira" },
    { name: "hiraCh", items: hiraCh, type: "hira" },
    { name: "hiraNy", items: hiraNy, type: "hira" },
    { name: "hiraHy", items: hiraHy, type: "hira" },
    { name: "hiraMy", items: hiraMy, type: "hira" },
    { name: "hiraRy", items: hiraRy, type: "hira" },
    { name: "hiraGy", items: hiraGy, type: "hira" },
    { name: "hiraJJ", items: hiraJJ, type: "hira" },
    { name: "hiraJC", items: hiraJC, type: "hira" },
    { name: "hiraBy", items: hiraBy, type: "hira" },
    { name: "hiraPy", items: hiraPy, type: "hira" },
];

export const kataArr: Array<KanaRow> = [
    { name: "kataSingle", items: kataSingle, type: "kata" },
    { name: "kataK", items: kataK, type: "kata" },
    { name: "kataS", items: kataS, type: "kata" },
    { name: "kataT", items: kataT, type: "kata" },
    { name: "kataN", items: kataN, type: "kata" },
    { name: "kataH", items: kataH, type: "kata" },
    { name: "kataM", items: kataM, type: "kata" },
    { name: "kataY", items: kataY, type: "kata" },
    { name: "kataR", items: kataR, type: "kata" },
    { name: "kataWaO", items: kataWaO, type: "kata" },
    { name: "kataNSingle", items: kataNSingle, type: "kata" },
    { name: "kataG", items: kataG, type: "kata" },
    { name: "kataZ", items: kataZ, type: "kata" },
    { name: "kataD", items: kataD, type: "kata" },
    { name: "kataB", items: kataB, type: "kata" },
    { name: "kataP", items: kataP, type: "kata" },
];

export const kataCombArr: Array<KanaRow> = [
    { name: "kataKy", items: kataKy, type: "kata" },
    { name: "kataSh", items: kataSh, type: "kata" },
    { name: "kataCh", items: kataCh, type: "kata" },
    { name: "kataNy", items: kataNy, type: "kata" },
    { name: "kataHy", items: kataHy, type: "kata" },
    { name: "kataMy", items: kataMy, type: "kata" },
    { name: "kataRy", items: kataRy, type: "kata" },
    { name: "kataGy", items: kataGy, type: "kata" },
    { name: "kataJJ", items: kataJJ, type: "kata" },
    { name: "kataJC", items: kataJC, type: "kata" },
    { name: "kataBy", items: kataBy, type: "kata" },
    { name: "kataPy", items: kataPy, type: "kata" },
];
