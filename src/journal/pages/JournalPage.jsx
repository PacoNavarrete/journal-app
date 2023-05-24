import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../views/NoteView';
import { NothingSelectedView } from '../views/NothingSelectedView';

export const JournalPage = () => {
  return (
    <JournalLayout>
      <p className="text-xl">Journal Title</p>
      <p className="text-sm">
        Exercitation cillum irure elit consectetur, Exercitation cillum irure
        elit consectetur.
      </p>
      {/* <NothingSelectedView /> */}
      <NoteView />
      <div className="absolute bottom-14 right-16 p-2 rounded-full duration-300 hover:cursor-pointer hover:bg-slate-200">
        <svg width="35" height="35" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
      </div>
    </JournalLayout>
  );
};
