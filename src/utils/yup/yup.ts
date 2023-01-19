import * as yup from "yup";

export const loginScheme = yup.object().shape({
  email: yup.string().email("이메일 형식에 맞지 않습니다").required(""),
  password: yup
    .string()
    .min(8, "비밀번호 8~15자 이내로 입력해주세요")
    .max(15, "비밀번호 8~15자 이내로 입력해주세요")
    .required(""),
});

export const signupScheme = yup.object().shape({
  email: yup.string().email("이메일 형식에 맞지 않습니다").required(""),
  password: yup
    .string()
    .min(8, "비밀번호 8~15자 이내로 입력해주세요")
    .max(15, "비밀번호 8~15자 이내로 입력해주세요")
    .required(""),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "⚠️ 비밀번호가 일치하지 않습니다"),
});

export const todoScheme = yup.object().shape({
  title: yup.string().required("제목을 입력해주세요"),
  content: yup.string().required("내용을 입력해주세요"),
});
