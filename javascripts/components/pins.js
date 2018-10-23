import { loadPinsForboard } from '../data/boardsData.js';

const initialpinView = (boardId) => {
	loadPinsForboard(boardId);
};

export { initialpinView };
