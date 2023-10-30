---
title: "Hosting Hugo Websites on IPFS"
date: 2023-10-30T20:05:27+01:00
draft: false
tags:
  - IPFS
  - Hugo
---

De IPFS version of this page can be found at: https://ipfs.reijn.dev

The decentralized web is the future, and IPFS (InterPlanetary File System) is one of the pioneers in this frontier. IPFS is a peer-to-peer protocol for storing and accessing files, websites, applications, and more. Pair that with Hugo - a fast and modern static site generator, and you've got a recipe for a decentralized and blazing-fast website. Here's how to host your Hugo website on IPFS.

1. What you'll need:
   * A website built with Hugo
   * IPFS installed on your computer
   * A pinch of enthusiasm for the decentralized web!
2. Build your Hugo website:
   Before you can upload anything to IPFS, you need to build your website using Hugo. Navigate to your Hugo site's root directory and run:

```
hugo --minify
```

This will generate a 'public' directory containing your built site.

3. Add your website to IPFS:
   Navigate to the 'public' directory:

```
cd public
```

Now, add this directory to IPFS:

```
ipfs add -r .
```

You'll get a hash for each file and one for the entire directory. Note the hash for the directory, as it represents the address of your website on IPFS.

4. Accessing your website:
   Your website is now live on IPFS! To access it, go to any public IPFS gateway and append your hash:

```
https://ipfs.io/ipfs/[Your_Directory_Hash]
```

Replace [Your_Directory_Hash] with the hash you noted in the previous step.

5. Keeping your site accessible:
   IPFS relies on peers to host content. If no one accesses your website for an extended period, it might become inaccessible. To ensure consistent availability, consider pinning your website using services like Pinata or running your own dedicated IPFS node.

## Conclusion:
Hosting a Hugo website on IPFS is a straightforward process, marrying the best of static web generation with the decentralized web's resilience and vision. Not only does it align with a more open and free internet, but it also offers a glimpse into how the web of the future might operate.