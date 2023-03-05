type CourseType = {
  name: string;
  code: string;
  type: "기본소양" | "전공기반" | "공학전공" | "교직";
  year: 1 | 2 | 3 | 4 | null;
  semester: 1 | 2 | null;
  credit: number;
  required: boolean;
  design: boolean;
};

export const courseData: CourseType[] = [
  {
    name: "논리와 비판적 사고",
    code: "CLTR0045",
    type: "기본소양",
    year: 1,
    semester: 1,
    credit: 3,
    required: false,
    design: false,
  },
  {
    name: "소셜네트워크",
    code: "CLTR0264",
    type: "기본소양",
    year: 1,
    semester: 1,
    credit: 3,
    required: false,
    design: false,
  },
  {
    name: "수학1",
    code: "CLTR0211",
    type: "전공기반",
    year: 1,
    semester: 1,
    credit: 3,
    required: true,
    design: false,
  },
  {
    name: "물리학1",
    code: "CLTR0213",
    type: "전공기반",
    year: 1,
    semester: 1,
    credit: 3,
    required: true,
    design: false,
  },
  {
    name: "물리학실험1",
    code: "CLTR0223",
    type: "전공기반",
    year: 1,
    semester: 1,
    credit: 1,
    required: false,
    design: false,
  },
  {
    name: "이산수학",
    code: "COME0301",
    type: "전공기반",
    year: 1,
    semester: 2,
    credit: 3,
    required: true,
    design: false,
  },
  {
    name: "프로그래밍기초",
    code: "COMP0204",
    type: "전공기반",
    year: 1,
    semester: 2,
    credit: 6,
    required: true,
    design: false,
  },
  {
    name: "기초창의공학설계",
    code: "COMP0205",
    type: "전공기반",
    year: 1,
    semester: 2,
    credit: 3,
    required: true,
    design: true,
  },
  {
    name: "미래산업과 직업선택",
    code: "CLTR0689",
    type: "기본소양",
    year: 2,
    semester: 1,
    credit: 3,
    required: false,
    design: false,
  },
  {
    name: "자바프로그래밍",
    code: "COMP0217",
    type: "공학전공",
    year: 2,
    semester: 1,
    credit: 3,
    required: true,
    design: false,
  },
  {
    name: "자료구조",
    code: "COME0331",
    type: "공학전공",
    year: 2,
    semester: 1,
    credit: 3,
    required: true,
    design: false,
  },
  {
    name: "시스템프로그래밍",
    code: "ELEC0462",
    type: "공학전공",
    year: 2,
    semester: 2,
    credit: 3,
    required: true,
    design: true,
  },
];
