export const tool = {
  "id": "E033",
  "title": "중실 원축 최대 전단응력 계산기",
  "inputs_text": "비틀림 토크 크기 T [N·m], 지름 d [m]",
  "formula": "τ_max = 16 T / (π d³)",
  "output_text": "축 표면 최대 전단응력 τ_max [Pa]",
  "assumptions": "T≥0, d>0. 선형 탄성·균일한 중실 원축의 순수 비틀림에 한정한다. 중공축·비원형축·키홈의 응력집중은 제외한다.",
  "purpose": "축 비틀림 전단응력 / 구동축 지름 초기 검산",
  "sources": [
    {
      "label": "University of Illinois · Torsion",
      "url": "https://mechref.engr.illinois.edu/sol/torsion.html"
    }
  ],
  "slug": "eng-shaft-shear",
  "category": "재료",
  "result_label": "표면 최대 전단응력 τ_max",
  "result_dimension": "pressure",
  "fields": [
    {
      "key": "t",
      "label": "비틀림 토크 크기 T",
      "dimension": "torque",
      "example": 100,
      "constraint": "nonnegative",
      "display_unit": "Nm",
      "display_value": "100"
    },
    {
      "key": "d",
      "label": "중실 원축 지름 d",
      "dimension": "length",
      "example": 0.02,
      "constraint": "positive",
      "display_unit": "mm",
      "display_value": "20"
    }
  ],
  "site": "https://nanalab.kr/eng-shaft-shear/",
  "repository": "https://github.com/NaNaCompany/eng-shaft-shear",
  "condition": "",
  "output_unit": "MPa"
};
