import { ref } from "vue";
import { InquiryDetail, defaultInquiryDetail } from "./types";

export const inquiryDetail = ref<InquiryDetail>(defaultInquiryDetail());
