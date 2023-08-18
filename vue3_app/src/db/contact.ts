import { ref } from "vue";
import { InquiryDetail, defaultInquiryDetail } from "../Profile_types/types";

export const inquiryDetail = ref<InquiryDetail>(defaultInquiryDetail());
