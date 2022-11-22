// 이미지 검증

export const checkFile = (file?: File) => {
    
    if(!file) {
        alert("파일이 존재하지 않습니다.")
        return false;
    };

    if(file?.size > 5 * 1024 * 1024) {
        alert("파일 용량이 너무 큽니다. (제한: 5MB)")
        return false;
    }

    if(!file.type.includes("png") && !file.type.includes("jpeg")) {
        alert("png 또는 jpeg 파일만 업로드 가능합니다.")
        return false;
    }

    return true;
}