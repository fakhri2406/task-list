import { Outlet } from 'react-router-dom';

function MainLayout() {
	return (
		<div>
			<header>
				<h1>Task List</h1>
			</header>

			<div>
				<div>
					<div>
						<button>Show all</button>
						<button>Completed</button>
						<button>Remaining</button>
					</div>

					<h2>Tasks</h2>
				</div>

				<div>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
