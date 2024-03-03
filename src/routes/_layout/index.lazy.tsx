import { createLazyFileRoute } from "@tanstack/react-router";
import Card from "../../components/Card";

export const Route = createLazyFileRoute("/_layout/")({
  component: Index,
});

const sampleCard = {
  src: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=700&quality=85&auto=format&fit=max&s=fa2a6e634973defc13bfcbae1b8e954d",
  title: "Neko Neko",
  details: "nyaa",
};

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Card {...sampleCard} />
    </div>
  );
}
