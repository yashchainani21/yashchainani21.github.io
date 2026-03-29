---
layout: page
title: Software
permalink: /software/
---

# Software

Below is a selection of open-source software tools and libraries I have developed or contributed to. All are freely available on GitHub.

---

### [TridentSynth](https://tridentsynth.lbl.gov)
A unified retrosynthesis web platform for designing synthetic pathways that combine biological and chemical transformations. TridentSynth integrates enzymatic catalysis, polyketide synthase (PKS) engineering, and synthetic organic chemistry into a single planning interface, enabling researchers to explore hybrid biosynthetic routes to target molecules.

---

### [RL Agents for Retrosynthesis](https://github.com/yashchainani21/RL_agents_for_retrosynthesis)
A hierarchical multi-agent reinforcement learning framework for retrosynthesis planning. Uses Monte Carlo Tree Search (MCTS) to combine three complementary synthesis modalities — synthetic organic chemistry, monofunctional enzymes, and polyketide synthases — to design multi-step pathways to complex target molecules. Includes thermodynamic feasibility scoring, configurable reward policies, and interactive pathway visualizations.

---

### [BioPKS Pipeline](https://github.com/JBEI/BioPKS-Pipeline)
A combined retrobiosynthesis pipeline that integrates RetroTide (modular PKS retrobiosynthesis) and DORAnet (enzymatic and chemical network expansion) to expand the design space of feasible biosynthetic pathways between simple precursors and high-value small molecules. Published in [*Nature Communications*](https://www.nature.com/articles/s41467-025-61160-y).

---

### [RetroTide](https://github.com/JBEI/RetroTide)
A Python library for automated polyketide synthase (PKS) retrobiosynthesis. Given a target chemical structure, RetroTide designs modular PKS assembly lines by searching over combinations of enzymatic domains and building blocks to identify feasible biosynthetic routes.

---

### [DORA-XGB](https://github.com/tyo-nu/DORA_XGB)
Supervised learning classifiers for predicting the feasibility of enzymatic reactions, trained using a novel synthetic data augmentation approach. By generating synthetic infeasible reactions to augment known feasible ones, DORA-XGB learns to distinguish between feasible and infeasible enzymatic transformations. Available on [PyPI](https://pypi.org/project/DORA-XGB/). Published in [*Molecular Systems Design & Engineering*](https://pubs.rsc.org/en/content/articlehtml/2024/me/d4me00118d).

---

### [PolyketideClassifier](https://github.com/yashchainani21/PolyketideClassifier)
A Graph Attention Network (GAT) classifier for distinguishing polyketide synthase products from non-PKS molecules. Trained on molecular graphs with hard-negative mining, the model achieves near-perfect in-distribution accuracy and strong out-of-distribution generalization, particularly for methyltransferase-modified structures where fingerprint-based methods fail.

---

### [ContrastiveGNNs](https://github.com/yashchainani21/ContrastiveGNNs)
A research project exploring supervised contrastive learning with graph neural networks for molecular classification. Uses a triplet-based training strategy with enzymatic and synthetic hard negatives to learn molecular representations that capture structural differences between polyketide and non-polyketide molecules more robustly than traditional fingerprint methods.
