export function Cities({ requiredCity }) {

      return (
        <div>
          <h3>{requiredCity.name}</h3>
          <div>This city currently has {requiredCity.hospitals.length} hospitals</div>
          <button>View</button>
        </div>
      );
  }
