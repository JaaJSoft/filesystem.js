import {FileSystemProvider} from "./spi/FileSystemProvider";
import {Path} from "./Path";
import {FileStore} from "./FileStore";
import {PathMatcher} from "./PathMatcher";
import {UserPrincipalLookupService} from "./attribute/UserPrincipalLookupService";
import {Closeable} from "../Closeable";

/* A common interface for all file systems. */
export abstract class FileSystem implements Closeable {

    protected constructor() {
        //
    }

    public abstract provider(): FileSystemProvider;

    public abstract close(): void

    public abstract isOpen(): boolean;

    public abstract isReadOnly(): boolean;

    /* It returns the separator used by the file system. */
    public abstract getSeparator(): string;

    public abstract getRootDirectories(): Iterable<Path>;

    public abstract getFileStores(): Iterable<FileStore>;

    public abstract supportedFileAttributeViews(): Set<string>;

    public abstract getPathMatcher(syntaxAndPattern: string): PathMatcher;

    public abstract getUserPrincipalLookupService(): UserPrincipalLookupService;

    public abstract getPath(first: string, more?: string[]): Path;
}
