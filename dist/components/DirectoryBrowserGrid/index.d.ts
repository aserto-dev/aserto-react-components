import React from 'react';
import { User } from '../../types';
export declare const scrollToTop: () => void;
export declare type DirectoryBrowserGridProps = {
    pageSize: number;
    users: readonly User[];
    filter: string;
    onClickCard: (id: string) => void;
};
export declare const DirectoryBrowserGrid: React.FC<DirectoryBrowserGridProps>;
