import Dower from "@pages/Dower";
import TableComponent from "@pages/Table";
import { Button } from "@components/ui/button";

function App() {
  return (
    <div className="p-16">
      <Dower>
        <Button variant="secondary" className="">Open Drawer</Button>
      </Dower>
      <TableComponent />
    </div>
  );
}

export default App;
