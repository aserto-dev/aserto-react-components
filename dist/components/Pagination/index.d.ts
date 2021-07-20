import React from 'react';
export declare type PaginationProps = {
    onClickNext?: () => void;
    onClickPrev?: () => void;
    onClickFirst?: () => void;
    onClickLast?: () => void;
    onChangePage?: (page: number) => void;
    startPage?: number;
    endPage?: number;
    currentPage: number;
    showPrevNextButtons?: boolean;
    showFirstAndLastButtons?: boolean;
    disabledNext?: boolean;
    disabledPrev?: boolean;
    testId?: string;
};
export declare const Pagination: React.FC<PaginationProps>;
