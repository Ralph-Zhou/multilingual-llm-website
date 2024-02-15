+++
title = "Data Resources"
+++



In multi-lingual large language models, three core procedures are pretraining, supervised fine-tuning (SFT) and reinforcement learning from human feedback (RLHF) . Here, we list the data resources found for these stages respectively.



## <center> Multilingual Pretraining Data

### Manual Creation

**Manual Creation** obtains high-quality pre-training corpora through manual creation and proofreading.

- [**Bible Corpus**](https://huggingface.co/datasets/bible-nlp/biblenlp-corpus). It offers rich linguistic and cultural content, covering 833 different languages. 
- [**MultiUN**](https://conferences.unite.un.org/UNCorpus). It is composed of official records and other parliamentary documents of the United Nations that  are in the public domain. 
- [**IIT Bombay**](https://www.cfilt.iitb.ac.in/iitb_parallel/). The dataset comprises parallel content for English-Hindi, along with monolingual Hindi data gathered from diverse existing sources and corpora.

### Web Crawling

**Web Crawling** involves crawling extensive multilingual data from the internet.

- [**CC-100**](https://huggingface.co/datasets/cc100). This corpus comprises of monolingual data for 100+ languages and also includes data for romanized languages.
- [**mC4**](https://huggingface.co/datasets/mc4). It is a multilingual colossal, cleaned version of Common Crawl's web crawl corpus.
- [**RedPajamav2**](https://github.com/togethercomputer/RedPajama-Data). It is an open dataset with 30 Trillion Tokens for Training Large Language Models.
- [**OSCAR**](https://huggingface.co/datasets/oscar-corpus/OSCAR-2301). It is a huge multilingual corpus obtained by language classification and filtering of the Common Crawl corpus using the ungoliant architecture.
- [**Oromo**](https://huggingface.co/datasets/castorini/afriberta-corpus). The Oromo dataset is mostly from the BBC news website, and some languages also have data from Common Crawl.
- [**Wu Dao 2.0**](https://data.baai.ac.cn/details/WuDaoCorporaText). It is a large dataset constructed for training Wu Dao 2.0. It contains 3 terabytes of text scraped from web data, 90 terabytes of graphical data (incorporating 630 million text/image pairs), and 181 gigabytes of Chinese dialogue (incorporating 1.4 billion dialogue rounds).
- [**Europarl**](https://www.statmt.org/europarl/). The Europarl parallel corpus is extracted from the proceedings of the European Parliament. It includes versions in 21 European languages.
- **JW300**. It is a parallel corpus of over 300 languages with around 100 thousand parallel sentences per language pair on average.
- [**Glot500**](https://github.com/cisnlp/Glot500?tab=readme-ov-file#glot500-c). It is a large corpus covering more than 500 diverse languages.
- [**Wikimedia**](https://dumps.wikimedia.org/). This dataset includes Wikipedia, Wikivoyage, Wiktionary, Wikisource, and others.
- [**WikiMatrix**](https://github.com/facebookresearch/LASER/tree/main/tasks/WikiMatrix). It is a freely available corpus with 135 million parallel sentences extracted from Wikipedia articles in 85 languages, facilitating multilingual natural language processing tasks.
- [**OPUS-100**](https://huggingface.co/datasets/opus100). It is an English-centric corpus covering 100 languages, including English, selected based on the volume of parallel data available in OPUS, with all training pairs including English on either the source or target side.
- [**AfricanNews**](https://github.com/masakhane-io/lafand-mt). The corpus covers 16 languages, some languages are very low-resource languages.
- [**Taxi1500**](https://github.com/cisnlp/Taxi1500). This dataset is used for assessing multilingual pre-trained language models' cross-lingual generalization, comprising a sentence classification task across 1502 languages from 112 language families.
- [**CulturaX**](https://huggingface.co/datasets/uonlp/CulturaX). It is a substantial multilingual dataset with 6.3 trillion tokens in 167 languages, tailored for LLM development.

### Benchmark Adaption

**Benchmark Adaption** means re-cleaning existing benchmark to enhance data quality or integrating existing benchmarks to create more extensive pre-training datasets.

- [**ROOTS**](https://huggingface.co/bigscience-data). It is a 1.6TB dataset spanning 59 languages (46 natural languages and 13 programming languages), aimed at training the multilingual model BLOOM.
- [**OPUS**](https://opus.nlpl.eu/). It is a large collection of freely available parallel corpora. It covers over 90 languages and includes data from several domains.
- **CCMT Dataset**. The datasets associated with the Conference on China Machine Translation (CCMT) often emphasize Chinese language processing and translation tasks. These datasets typically include parallel corpora of Chinese texts with translations into various languages.
- **WMT Dataset**. The datasets released by the Workshop on Machine Translation (WMT) covers a wide range of languages and translation tasks. They include parallel corpora from various domains, such as news, literature, and technical documents.
- **IWSLT Dataset**: Datasets released by the International Workshop on Spoken Language Translation (IWSLT) are tailored for spoken language translation tasks, often comprising audio recordings with corresponding transcripts and translations.



## <center>  Multilingual SFT Data

### Manual Creation

**Manual Creation** acquires SFT corpora through manual creation and proofreading.

- [**Sup-NatInst**](https://instructions.apps.allenai.org/). It is a benchmark of 1,616 diverse NLP tasks with expert-written instructions, covering 76 task types. 
- [**OpenAssist**](https://huggingface.co/OpenAssistant). It is a conversation corpus comprising 161,443 messages across 66,497 conversation trees in 35 languages.
- [**EcoInstruct**](https://github.com/Alibaba-NLP/EcomGPT). It comprises 2.5 million E-commerce instruction data, scaling up the data size and task diversity by constructing atomic tasks with E-commerce basic data types.
- [**COIG-PC-lite**](https://huggingface.co/datasets/BAAI/COIG-PC-Lite). It is a curated dataset for Chinese NLP tasks, aimed at improving language models' performance in handling Chinese text across various applications.


### Benchmark Adaption

**Benchmark Adaptation** involves transformation from existing benchmarks to instruction format.

- [**xP3**](https://huggingface.co/datasets/bigscience/xP3). It is a collection of prompts and datasets spanning 46 languages and 16 NLP tasks, utilized for training BLOOMZ and mT0.
- [**BUFFET**](https://huggingface.co/datasets/BuffetFS/BUFFET). It unifies 15 diverse NLP datasets in typologically diverse 54 languages.
- [**PolyglotPrompt**](https://github.com/jinlanfu/Polyglot_Prompt). The dataset covers six tasks - topic classification, sentiment classification, named entity recognition, question answering, natural language inference, and summarization - across 49 languages.


### Machine Translation

**Machine Translation** translates the existing monolingual datasets into multilingual instruction datasets.


- [**xP3-MT**](https://huggingface.co/datasets/bigscience/xP3mt). It is a mixture of 13 training tasks in 46 languages with prompts in 20 languages (machine-translated from English).
- [**MultilingualSIFT**](https://github.com/FreedomIntelligence/MultilingualSIFT). It is a dataset translated using GPT-3.5 Turbo.
- [**Bactrian-X**](https://huggingface.co/datasets/MBZUAI/Bactrian-X). It is a dataset with 3.4 million instruction-response pairs in 52 languages. English instructions from alpaca-52k and dolly-15k are translated into 51 languages using Google Translate API.
- [**CrossAlpaca**](https://github.com/lranaldii/CrossAlpaca). They are benchmarks used in CrossAlpaca.
- [**MGSM8KInstruct**](https://github.com/microsoft/MathOctopus). It is an inaugural multilingual math reasoning instruction dataset.



### MLLM Aided Generation

**MLLM Aided Generation** means that the data are automatically synthesized with the help of MLLM.

- [**MultiAlpaca**](https://huggingface.co/DAMO-NLP-MT). It is a multilingual instruction dataset with 132,701 samples.
- [**Guanaco**](https://github.com/artidoro/qlora). It is the dataset used in Guanaco models.
- [**Alpaca-4**](https://github.com/Instruction-Tuning-with-GPT-4/GPT-4-LLM). It is a dataset generated by GPT-4, consisting of a 52K instruction-following dataset in both English and Chinese, along with GPT-4-generated feedback data rating the outputs of three instruction-tuned models.
- [**OverMiss**](https://github.com/pppa2019/swie_overmiss_llm4mt). It is a dataset used to improve model faithfulness by comparing over-translation and misstranslation results with the correct translation.
- ShareGPT. ShareGPT is originally an open-source Chrome Extension, aiming to share user's ChatGPT conversations.



## <center> Multilingual RLHF Data

- [**TIM**](https://github.com/lemon0830/TIM). The dataset utilizes constructed samples for model learning comparison signals, supplementing regular translation data with dictionary information or translation errors.
- [**Okapi**](https://github.com/nlp-uoregon/Okapi). It offers resources for instruction tuning with RLHF across 26 languages, encompassing ChatGPT prompts, multilingual instruction datasets, and multilingual response ranking data.

