import * as React from "react";
import Modal from "react-modal";
import { Radar } from "../components/Radar";
import { useRadarData } from "../hooks/useRadarData";
import { Entry } from "../models/radar";
import "./index.css";

const IndexPage = () => {
  const { quadrants, entries, rings } = useRadarData();
  const [selectedEntry, setSelectedEntry] = React.useState<Entry | null>(null);

  function closeModal() {
    setSelectedEntry(null);
  }

  const handleEntryClick = React.useCallback(setSelectedEntry, []);

  const isModalOpen = Boolean(selectedEntry);

  return (
    <main>
      <Modal
        ariaHideApp={false}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <h1>{selectedEntry?.label}</h1>
        <div>
          <a
            href="https://github.com/boldare/boldare-radar/issues/new"
            target="_blank"
            rel="noreferrer"
          >
            Suggest changes
          </a>
        </div>
      </Modal>
      <Radar
        handleEntryClick={handleEntryClick}
        quadrants={quadrants}
        entries={entries}
        rings={rings}
      />
    </main>
  );
};

export default IndexPage;
