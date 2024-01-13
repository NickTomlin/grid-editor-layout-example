import './style.css';
import {content} from './content';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import {basicSetup} from "codemirror";

const previewButton = document.querySelector('#previewToggle');
const sidebarButton = document.querySelector('#sidebarToggle');

previewButton.addEventListener('click', () => {
  document.querySelector('.preview').classList.toggle('collapsed');
});

sidebarButton.addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('collapsed');
});

document.querySelector('#infoPane-toggle').addEventListener('click', () => {
  document.querySelector('.infoPane').classList.toggle('small');
});

// populate();
new EditorView({
  state: EditorState.create({
    doc: content,
    extensions: [basicSetup]
  }),
  parent: document.querySelector('.cm')
})